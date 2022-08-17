import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useGlobalContext } from "../../contextApi";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";
import { webData } from "../../data/webData";
// icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import ClearIcon from "@material-ui/icons/Clear";
//alice
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function TransitionsModal() {
  const { modalId, closeModal, isModalOpen } = useGlobalContext();
  const classes = useStyles();

  const { name, program, images, about, link, project } = webData[modalId];

  const responsive = {
    0: {
      items: 1,
    },
  };
  const handleDragStart = (e) => e.preventDefault();
  const items = images?.map((img) => {
    return (
      <Box className={classes.imgsBox}>
        <img src={img} className={classes.imgs} onDragStart={handleDragStart} />
      </Box>
    );
  });
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Paper className={classes.paper}>
            <Box className={classes.imgsBox}>
              <AliceCarousel
                infinite
                mouseTracking
                disableDotsControls
                autoPlay
                autoPlayInterval={2000}
                responsive={responsive}
                items={items}
                renderPrevButton={() => {
                  return <NavigateBeforeIcon className={classes.beforeIcon} />;
                }}
                renderNextButton={() => {
                  return <NavigateNextIcon className={classes.afterIcon} />;
                }}
              />
            </Box>
            <Container className={classes.depthCont}>
              <Box className={classes.gitHubIco}>
                <Typography className={classes.webTitle}>{name}</Typography>

                <Link
                  href={project}
                  target="_blank"
                  className={classes.gitLink}
                >
                  GitHub
                  <GitHubIcon className={classes.gitHubIcon} />
                </Link>
              </Box>
              <Typography className={classes.webSubTitle}>{program}</Typography>
              <Typography className={classes.webAbout}>{about}</Typography>
              <Box className={classes.btnBox}>
                <Button
                  variant="contained"
                  className={classes.btnMore}
                  href={link}
                  target="_blank"
                >
                  <OpenInNewIcon className={classes.btnIcon} /> View Site
                </Button>
                <ClearIcon
                  className={classes.leavingIcon}
                  onClick={closeModal}
                />
              </Box>
            </Container>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
