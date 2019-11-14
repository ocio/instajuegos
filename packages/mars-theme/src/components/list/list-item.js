import React, { useRef, useMemo } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

const width = 200;
const height = 114;

const Item = ({ state, item }) => {
  // const author = state.source.author[item.author];
  // const date = new Date(item.date);

  const videocontainer = useRef(null);
  const element = useMemo(() => ({}));

  function playVideo() {
    if (typeof item.thumbnail_video === "string") {
      videocontainer.current.style.display = "block";
      if (element.video === undefined) {
        const video = document.createElement("video");
        video.addEventListener("loadeddata", () => {}, false);

        video.setAttribute("width", "100%");
        video.setAttribute("height", "auto");
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.setAttribute("loop", "");
        video.setAttribute("playsinline", "");
        videocontainer.current.appendChild(video);
        const source = document.createElement("source");
        source.src = item.thumbnail_video;
        source.type = "video/mp4";
        video.appendChild(source);

        element.video = video;
        element.source = source;
      }
    }
  }

  function stopVideo() {
    videocontainer.current.style.display = "none";
  }

  return (
    <Container>
      <PictureContainer onMouseEnter={playVideo} onMouseLeave={stopVideo}>
        <Image src={item.thumbnail_image} />
        <VideoContainer ref={videocontainer} />
        {/* <Video ref={video} autoPlay muted loop playsInline>
        <source ref={mp4} type="video/mp4" />
      </Video> */}
      </PictureContainer>
      <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
    </Container>
  );
};

export default connect(Item);

const Container = styled.div`
  margin: 10px;
  float: left;
`;
const PictureContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width}px;
  height: ${height}px;
  background-image: url(${p => p.image});
  border: 5px solid white;
`;

const Title = styled.div``;

const VideoContainer = styled.div`
  display: none;
  background: url("/static/images/loading.svg") no-repeat center center / 30px
    30px rgba(255, 255, 255, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
`;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin: 0;
//   padding-top: 24px;
//   padding-bottom: 8px;
//   box-sizing: border-box;
// `;

// const Author = styled.span`
//   font-size: 0.9em;
// `;

// const StyledLink = styled(Link)`
//   padding: 15px 0;
// `;

// const Fecha = styled.span`
//   font-size: 0.9em;
// `;

// const Excerpt = styled.div`
//   line-height: 1.6em;
// `;

/*
<article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <div>
        {author && (
          <StyledLink link={author.link}>
            <Author>
              By <b>{author.name}</b>
            </Author>
          </StyledLink>
        )}
        <Fecha>
          {" "}
          on <b>{date.toDateString()}</b>
        </Fecha>
      </div>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>

    */
