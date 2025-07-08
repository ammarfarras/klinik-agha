import { Card, Button } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function DataBookingAdmin() {
  const [dataBooking, setDataBooking] = useState([]);
  const [uploadLog, setUploadLog] = useState("");

  const API = "https://680b688bd5075a76d98afe61.mockapi.io/users";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setDataBooking(res.data);
    } catch (err) {
      console.error("Gagal fetch data:", err);
    }
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Hapus ${name}?`,
      text: "Data ini akan hilang permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API}/${id}`);
          setDataBooking((prev) => prev.filter((item) => item.id !== id));
          Swal.fire("Berhasil!", "Data telah dihapus.", "success");
        } catch (err) {
          Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus.", "error");
        }
      }
    });
  };

  const handleCSVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const rows = text.trim().split("\n");
    const headers = rows[0].split(",");

    const users = rows.slice(1).map((row) => {
      const values = row.split(",");
      return Object.fromEntries(
        values.map((val, i) => [headers[i].trim(), val.trim()])
      );
    });

    let logs = "";

    for (const user of users) {
      try {
        const foundUser = dataBooking.find((item) => item.email === user.email);
        if (!foundUser) {
          logs += `❌ Email ${user.email} tidak ditemukan\n`;
          continue;
        }

        await axios.put(`${API}/${foundUser.id}`, {
          ...foundUser,
          face_id: user.face_id,
        });

        logs += `✅ ${user.email} berhasil diupdate\n`;
      } catch (err) {
        logs += `❌ Gagal update ${user.email}: ${err.message}\n`;
      }
    }

    setUploadLog(logs);
    fetchData(); // refresh
  };

  return (
    <>
      <div className="mb-4">
        <h5>📂 Upload CSV (email,face_id)</h5>
        <input type="file" accept=".csv" onChange={handleCSVUpload} />
        {uploadLog && (
          <pre style={{ background: "#eee", padding: "10px" }}>{uploadLog}</pre>
        )}
      </div>

      <div>
        {dataBooking.map((item) => (
          <Card className="p-5 mb-3" key={item.id}>
            <h6 className="mb-3">User ID :</h6>
            <h4>{item.id}</h4>
            <h6 className="mb-3">Nama Pasien :</h6>
            <h4>{item.name}</h4>
            <h6 className="mb-3">E-Mail :</h6>
            <h4>{item.email}</h4>
            <h6 className="mb-3">Password Pasien :</h6>
            <h4>{item.password}</h4>
            <h6 className="mb-3">Face ID :</h6>
            <h4>{item.face_id || "-"}</h4>
            <h6 className="mb-3">Tanggal Daftar</h6>
            <h4>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "-"}
            </h4>
            <Button
              style={{
                backgroundColor: "rgba(58, 142, 246, 1)",
                color: "white",
                border: "none",
                marginTop: "20px",
              }}
              onClick={() => handleDelete(item.id, item.name)}
            >
              Hapus
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default DataBookingAdmin;
