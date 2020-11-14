"scripts": {
"start": "nodemon --watch back-end --exec babel-node server.js"
}

header

<header className="header">
      <div className="nav-list">
        <div className="brand">
          {/* <button onClick={openMenu}>&#9776;</button> */}
          <Link to="/">Let's Shopping</Link>
        </div>
        <ul className="nav-list-items">
          <li className="nav-list-item">
            {userInfo ? (
              <Link to="/profile"> {userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </li>
          {userInfo ? (
            <li className="nav-list-item">
              {userInfo.isAdmin && <Link to="/products"> Admin</Link>}
            </li>
          ) : null}
          <li className="nav-list-item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>

// home page

<div className="home-page">
      <div className="home-right">
        {/* <aside className="sidebar">
          <h3>shopping categories</h3>
          <button className="sidebar-close" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="pants.html">Pants</a>
            </li>
            <li>
              <a href="shirts.html">Shirts</a>
            </li>
          </ul>
        </aside> */}
        <div className="products-list">
          <ul className="grid">
            {products.map((product) => (
              <li to={"/products/" + product._id}>
                <Card>
                  <Link to={"/products/" + product._id}>
                    <CardImg top width="100%" src={product.image} />
                  </Link>
                  <CardBody>
                    {product.countInStock < 10 &&
                      (product.countInStock != 0 ? (
                        <Alert color="warning">
                          remain {product.countInStock}
                        </Alert>
                      ) : (
                        <Alert color="danger">finished</Alert>
                      ))}

                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.price} </CardText>
                    <CardText>
                      <small className="text-muted">
                        <a href={"/products/" + product._id}>More</a>
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
