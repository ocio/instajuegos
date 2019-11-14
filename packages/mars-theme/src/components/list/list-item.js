import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

const width = 275;
const height = 157;

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  // console.log(item);
  return (
    <Container image={item.thumbnail_image}>
      <video width="100%" height={height} autoPlay>
        <source
          src="http://54.236.189.131/wp-content/uploads/2019/11/bruh.mp4"
          type="video/mp4"
        />
      </video>
    </Container>
  );
};

export default connect(Item);

const Container = styled.div`
  width: ${width}px;
  height: ${height}px;
  background-image: url(${p => p.image});
  border: 5px solid white;
  margin: 10px;
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
