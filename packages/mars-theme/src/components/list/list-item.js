import React, { useRef, useMemo } from 'react'
import { connect, styled } from 'frontity'
import Link from '../link'
import FeaturedMedia from '../featured-media'
import loadingIco from '../../../../../static/images/loading.gif'

const width = 250
const height = 144

const Item = ({ state, item }) => {
    // const author = state.source.author[item.author];
    // const date = new Date(item.date);

    const videocontainer = useRef(null)
    const element = useMemo(() => ({}))
    const tag = state.source.tag
    const tags = item.tags.map(id => tag[id].name).join(', ')

    function playVideo() {
        if (typeof item.thumbnail_video === 'string') {
            videocontainer.current.style.display = 'block'
            if (element.video === undefined) {
                const video = document.createElement('video')
                video.addEventListener('loadeddata', () => {}, false)

                video.setAttribute('width', '100%')
                video.setAttribute('height', 'auto')
                video.setAttribute('autoplay', '')
                video.setAttribute('muted', '')
                video.setAttribute('loop', '')
                video.setAttribute('playsinline', '')
                videocontainer.current.appendChild(video)
                const source = document.createElement('source')
                source.src = item.thumbnail_video
                source.type = 'video/mp4'
                video.appendChild(source)

                element.video = video
                element.source = source
            }
        }
    }

    function stopVideo() {
        videocontainer.current.style.display = 'none'
    }

    return (
        <Link link={item.link}>
            <Container onMouseEnter={playVideo} onMouseLeave={stopVideo}>
                <PictureContainer>
                    <Image src={item.thumbnail_image} />
                    <VideoContainer ref={videocontainer} />
                    {/* <Video ref={video} autoPlay muted loop playsInline>
        <source ref={mp4} type="video/mp4" />
      </Video> */}
                </PictureContainer>
                <Text>
                    <Title
                        dangerouslySetInnerHTML={{
                            __html: item.title.rendered
                        }}
                    />
                    <Tag>{tags}</Tag>
                </Text>
            </Container>
        </Link>
    )
}

export default connect(Item)

const Container = styled.div`
    margin: 10px;
    float: left;
    background: #f1f1f1;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 0;
    cursor: pointer;
    width: 250px;
    height: 235px;
    &:hover {
        background: #45ff91;
        border: 1px solid #45ff91;
        color: black;
    }
    /* box-shadow: 0px 0px 23px 6px; */
`

const PictureContainer = styled.div`
    border-radius: 7px;
    border: 2px solid white;
    position: relative;
    overflow: hidden;
    width: ${width}px;
    height: ${height}px;
    background-image: url(${p => p.image});
`

const Text = styled.div`
    padding: 12px 10px 15px 10px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 21px;
`

const Tag = styled.div`
    font-weight: 400;
    font-size: 14px;
`

const VideoContainer = styled.div`
    display: none;
    background: url(${loadingIco}) no-repeat center center / 30px 30px
        rgba(255, 255, 255, 0.1);
    position: absolute;
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    position: absolute;
    width: 100%;
`

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
