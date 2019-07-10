import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from "styled-components"

import SrchIcon from "../assets/srch-icon.svg"

const SrchResCntr = styled.ul`
  font-weight: 300;
  text-transform: none;
  position: absolute;
  width: 100%;
  -webkit-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  margin: -5px 0 0 0;
  background-color: #fff;
  list-style: none;
  left: 0;
  z-index: 999;
`

const ResList = styled.li`
  display: flex;
  align-items: baseline;
  padding: 0.3rem 0 0.3rem 0.6rem;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #000;
    margin-bottom: 0.5rem;
  }

  img {
    padding-right: 0.5rem;
    margin: 0;
  }

  span {
    border-bottom: 1px solid #ff5100;
    transition: all ease-in-out 0.4s;
  }

  &:hover {
    span {
      color: #ff5100;
      border-bottom: 1px solid #000;
    }
  }
`

export default class search extends Component {
  state = {
    query: ``,
    results: [],
  }

  render() {
    return (
      <>
        <div
          style={{
            display: `inline-flex`,
            width: `100%`,
            padding: `0px`,
            margin: `0px`,
            borderBottom: `2px solid #000`,
          }}
        >
          <SrchIcon
            style={{
              backgroundColor: `#ffd100`,
              width: `35px`,
              height: `35px`,
            }}
          />
          <input
            style={{ width: `100%`, border: `none`, padding: `0 0 0 .5rem` }}
            type="text"
            placeholder="Search products"
            value={this.state.query}
            onChange={this.search}
          />
        </div>
        <SrchResCntr>
          {this.state.results.map(page => (
            <ResList key={page.id}>
              <Link to={"/" + page.path}>
                <img src={page.img} alt={page.title} />
                <span>{page.title}</span>
              </Link>
            </ResList>
          ))}
        </SrchResCntr>
      </>
    )
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)
  }

  search = e => {
    const query = e.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => {
          return this.index.documentStore.getDoc(ref)
        }),
    })
  }
}
