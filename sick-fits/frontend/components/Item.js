import React, { Component } from 'react'
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'
import DeleteItem from './DeleteItem'

export default class Item extends Component {
  render() {
    const { item } = this.props
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{Item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id }
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add To Cart</button>
          <DeleteItem id={item.id}>Delete this Item</DeleteItem>
        </div>
      </ItemStyles>
    )
  }
}
