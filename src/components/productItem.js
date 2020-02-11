import React, { Component } from "react"
import PropTypes, { string } from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import Img from "gatsby-image"
import AddToCartBtn from "./AddToCartBtn"

const GridItem = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-evenly;
  text-align: center;
  border: 3px solid #f6f7f8;
  border-radius: 5px;
  padding: 5px;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const ItemTitle = styled.h3`
  font-size: 1em;
  line-height: 1.2em;
  min-height: 100px;
  margin-bottom: 0.5rem;
  margin-top: 1.45rem;
  font-weight: 600;

  @media (max-width: 568px) {
    font-size: 1.1em;
  }

  @media (max-width: 320px) {
    font-size: 1em;
  }
`

const ItemPrice = styled.h3`
  color: #ff5100;
  font-size: 1.2em;
  font-weight: 700;

  @media (max-width: 568px) {
    font-size: 1.3em;
  }
`



export default class ProductItem extends Component {
  render() {
    const { node } = this.props

    const reformatImageUrl = () => {
      let cutEnd = node.data.cart_image.url.replace("?auto=compress,format", "")
      let finalform = cutEnd.replace("https://images.prismic.io/", "https://upsafetysolutions.cdn.prismic.io/")
      return finalform
    }
    
    return (
      <GridItem>
        <ItemLink style={{ width: `100%` }} to={`${node.uid}`}>
          <Img fluid={node.data.image.localFile.childImageSharp.fluid} />
        </ItemLink>
        <ItemLink to={`${node.uid}`}>
          <ItemTitle>{node.data.title.text}</ItemTitle>
        </ItemLink>
        <ItemPrice>${node.data.price}</ItemPrice>
        <form
          action="https://upsafetysolutions.foxycart.com/cart"
          method="post"
          acceptCharset="utf-8"
        >
          <input
            type="hidden"
            name={`${node.data.name_hmac.text}`}
            value={`${node.data.name.text}`}
          />
          <input
            type="hidden"
            name={`${node.data.price_hmac.text}`}
            value={`${node.data.price}`}
          />
          <input
            type="hidden"
            name={`${node.data.item_code_hmac.text}`}
            value={`${node.data.item_code_sku.text}`}
          />
          <input
            type="hidden"
            name={`${node.data.cart_image_hmac.text}`}
            value={reformatImageUrl()}
          />
          <input
            type="hidden"
            name={`${node.data.weight_hmac.text}`}
            value={`${node.data.weight}`}
          />
          <AddToCartBtn
            type="submit"
            value="Add To Cart"
            className="submit"
            style={{ justifySelf: `end` }}
          >
            ADD TO CART
          </AddToCartBtn>
        </form>
      </GridItem>
    )
  }
}

ProductItem.propTypes = {
  node: PropTypes.object.isRequired,
  // categories: PropTypes.array.isRequired,
}
