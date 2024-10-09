import PropTypes from 'prop-types'

function InventoryCategory({category}) {
    return (
        <h1> InventoryCategory { category }</h1>
    )
}

InventoryCategory.propTypes = {
    category: PropTypes.string,
};

export default InventoryCategory