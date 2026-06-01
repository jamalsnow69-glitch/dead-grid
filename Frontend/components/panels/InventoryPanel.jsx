import { ITEMS } from "../../data/items";

export default function InventoryPanel({ inventory }) {
  return (
    <section className="panel">
      <h2>Inventory</h2>

      {Object.entries(inventory).map(([itemId, amount]) => {
        const item = ITEMS[itemId];

        return (
          <div key={itemId} className="item-row">
            <strong>{item?.name || itemId}</strong>
            <span>x{amount}</span>
            <p>{item?.description || "Unknown item."}</p>
          </div>
        );
      })}
    </section>
  );
}
