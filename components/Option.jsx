export default function Option({ title, values, onAppend }) {
    return (
      <div>
        <h3 className="mt-2 font-bold">{title}</h3>
        <div className="grid-flow-row">
          {values.map((value) => {
            return (
              <button
                key={value}
                onClick={() => {
                  onAppend(value);
                }}
                className="px-6 py-2 m-2 text-xs uppercase bg-gray-200 rounded-3xl"
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    );
  }