import { useState } from "react";

export default function Todo() {
  const initialFolder: { id: string; activity: string; done: boolean }[] = [];
  const [list, setList] = useState(initialFolder);
  const [action, setAction] = useState("");
  const [msg, setMessage] = useState("");
  type MyObject = {
    id: string;
    activity: string;
    done: boolean;
  };
  const [edit, setEdit] = useState<MyObject>({});
  function uniqueId() {
    return Date.now();
  }

  function onHandler(e: React.FormEvent) {
    e.preventDefault();
    if (edit.id) {
      const updateAction = {
        ...edit,
        activity: action,
      };
      updateAction.done = false;
      const updateIndex = list.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      const copylist = [...list];
      copylist[updateIndex] = updateAction;
      setList(copylist);

      return canceled();
    }
    if (!action) {
      return setMessage("Isi woi");
    }
    setMessage("");
    setList([
      ...list,
      {
        id: uniqueId().toString(),
        activity: action,
        done: false,
      },
    ]);
    setAction("");
  }

  function removed(todoId: string) {
    const filterData = list.filter(function (list) {
      return list.id != todoId;
    });
    setList(filterData);
    {
      edit.id && canceled();
    }
  }

  function edited(todo:{activity: string; done:boolean; id:string}) {
    setAction(todo.activity);
    setEdit(todo);
  }

  function canceled() {
    setAction("");
    setEdit({});
  }

  function checked(todo:{activity: string; done:boolean; id:string}) {
    const checklist = {
      ...todo,
      done: todo.done ? false : true,
    };

    const IndexCheck = list.findIndex(function (search) {
      return search.id === todo.id;
    });

    const updateList = [...list];
    updateList[IndexCheck] = checklist;

    setList(updateList);
  }
  return (
    <>
      <h1>Simple To Do List</h1>
      <form onSubmit={onHandler}>
        {msg && <h3 style={{ color: "red" }}>{msg}</h3>}
        <input
          type="text"
          value={action}
          placeholder="Nama Aktivitas"
          onChange={function (event) {
            setAction(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan" : "Tambah"}</button>
        {edit.id && <button onClick={canceled}>Cancel</button>}
      </form>
      {list.length > 0 ? (
        <ul>
          {list.map(function (item) {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={()=>{checked(item)}}
                ></input>
                {item.done ? <s>{item.activity} </s> : item.activity}
                <button
                  onClick={() => {
                    removed(item.id);
                  }}
                >
                  Hapus
                </button>
                <button
                  onClick={() => {
                    edited(item);
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Data kosong</i>
        </p>
      )}
    </>
  );
}
