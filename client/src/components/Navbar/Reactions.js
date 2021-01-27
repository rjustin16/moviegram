import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbDownAltOutlined from "@material-ui/icons/ThumbDownAltOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export const Likes = ({ likecounter }) => {
  if (likecounter % 2 === 0) {
    likecounter = likecounter + 1;
    return <ThumbUpAltOutlined fontSize="small" />;
  } else {
    likecounter = likecounter + 1;
    return <ThumbUpAltIcon fontSize="small" />;
  }
};

export const DisLikes = ({ disLikecounter }) => {
  if (disLikecounter % 2 === 0) {
    disLikecounter = disLikecounter + 1;
    return <ThumbDownAltOutlined fontSize="small" />;
  } else {
    disLikecounter = disLikecounter + 1;
    return <ThumbDownAltIcon fontSize="small" />;
  }
};

export const Watches = ({ watchcounter }) => {
  if (watchcounter % 2 === 0) {
    watchcounter = watchcounter + 1;
    return <VisibilityOutlinedIcon fontSize="small" />;
  } else {
    watchcounter = watchcounter + 1;

    return <VisibilityIcon fontSize="small" />;
  }
};

export const BookMark = ({ bookmarkcounter }) => {
    if (bookmarkcounter % 2 === 0) {
        bookmarkcounter = bookmarkcounter + 1;
      return <BookmarkBorderIcon fontSize="small" />;
    } else {
        bookmarkcounter = bookmarkcounter + 1;
  
      return <BookmarkIcon fontSize="small" />;
    }
  };