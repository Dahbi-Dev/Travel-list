import React from 'react'

export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          Start adding some items to your packing list 🌠{" "}
        </p>
      );

    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = Math.round((packedItems / totalItems) * 100);

    return (
      <footer className="stats">
        {packedPercentage === 100 ? (
          "You got everthing! Ready to go ✈ "
        ) : (
          <em>
            You have {totalItems} item{totalItems !== 1 ? "s" : ""} on your
            list, and you already packed {packedItems} (
            {totalItems > 0 ? packedPercentage : 0}%)
          </em>
        )}
      </footer>
    );
  }