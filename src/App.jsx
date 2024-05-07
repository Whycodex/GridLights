import "./App.css";

function Cell(filled, onClick, isDisabled, label) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

function App() {
  return (
    <div>
      <div>
        {[...Array(9)].map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index || isDeactivating)}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}

export default App;
