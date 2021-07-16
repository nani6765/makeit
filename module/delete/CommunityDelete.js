const {
  Community,
  CommunityReple,
  CommunityRereple,
} = require("../../model/CoPost.js");

/*////////////////////////////
(1)
PostDelete - RepleDelete - RerepleDelete

(2)
RepleDelete -
Reple.rerepleNum > 0
? RepleUpdate({isdeleted: true})
: RepleDelete

(3)
RerepleDelete -
Reple.isdeleted && (Reple.rerepleNum === 0)
? RepleDelte + RerepleDelete
: RerepleDelete

Origin Login
PostDelete :
RepleDelete :
RerepleDelete : 
/////////////////////////////*/

function RerepleCompleteDelete(rerepleId, repleId) {
  CommunityRereple.deleteOne({ _id: rerepleId })
    .exec()
    .then((result) => {
      return CommunityReple.findOne({ _id: repleId }).exec();
    })
    .then((repleInfo) => {
      if (repleInfo.isDeleted && !repleInfo.rerepleNum) {
        repleInfo.deleteOne();
      } else {
        repleInfo.updateOne({
          $inc: { rerepleNum: -1 },
          $pull: { rerepleArray: { _id: rerepleId } },
        });
      }
      return 0;
    })
    .catch((err) => {
      return err;
    });
}
/*
  CommunityRereple.deleteOne(
    { _id: rerepleId }.exec((err, result) => {
      if (err) return err;
      CommunityReple.findOne({ _id: repleId }, (err, repleInfo) => {
        //댓글이 삭제되었고, 대댓글이 없는 경우
        if (repleInfo.isDeleted && !repleInfo.rerepleNum) {
          repleInfo.deleteOne().exec((err, result) => {
            if (err) return err;
          });
        } else {
          repleInfo
            .updateOne({ $inc: { rerepleNum: -1 } })
            .exec((err, result) => {
              if (err) return err;
            });
        }
      });
    })
  );
  */

function RepleCompleteDelete(repleId, rerepleNum, postNum) {
  //대댓글이 없는 경우
  if (!rerepleNum) {
    CommunityReple.deleteOne({ _id: repleId }).exec((err, result) => {
      if (err) return err;
    });
  } else {
    CommunityReple.findOneAndUpdate({ _id: repleId }, { isDeleted: true }).exec(
      (err, result) => {
        if (err) return err;
      }
    );
  }

  try {
    if (!rerepleNum) {
      CommunityReple.deleteOne({ _id: repleId });
    } else {
      CommunityReple.findOneAndUpdate({ _id: repleId }, { isDeleted: true });
    }
  } catch (error) {}
  Community.findOneAndUpdate(
    { postNum: postNum },
    { $inc: { repleNum: -1 } }
  ).exec((err, result) => {
    if (err) return err;
  });
}

function PostCompleteDelete(postId) {}
