import styled from "styled-components";

export default styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  nav {
    width: 100%;
    background: #108db8;
  }

  nav a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }

  .content {
    padding: 1rem;
  }
  .image {
    width: 25%;
    min-width: 500px;
    height: auto;
  }

  .blog-post {
    display: flex;
    flex-direction: column;
  }
`;
