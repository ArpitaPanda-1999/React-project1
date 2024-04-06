import Details from "./page5";

const ItemList = () => {
    return(
        <div className="container">
            <h1>Pros and Re-use the components in react</h1>
            <Details pname="mobile" price="5000" brand="Nokia" pcolor="red" seller="Nokia" />
            <Details pname="Laptop" price="36798" brand="Sumsung" pcolor="gray" seller="Sumsung" />
            <Details pname="Mouse" price="875" brand="Dell" pcolor="Black" seller="Dell" />
            <Details pname="mouse-pad" price="6456" brand="Realme" pcolor="blue" seller="Realme" />
        </div>
    )
}

export default ItemList;