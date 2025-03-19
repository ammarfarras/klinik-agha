import { Accordion } from "react-bootstrap";

export default function JadwalDokter() {
  return (
    <>
      {" "}
      <div>
        <h4>Jadwal Dokter</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dokter Umum</Accordion.Header>
            <Accordion.Body>
              <h4>Dokter Arlita Mirza Dian Prastiwi</h4>
              <p>Senin s/d Jum'at</p>
              <p>08.00 - 17.00 WIB</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Nora Putria, MKM</h4>
              <p>Senin s/d Jum'at</p>
              <p>18.00 - 06.00 WIB</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Suci Dwi Agusti</h4>
              <p>Sabtu 08.00 - 17.00 WIB</p>
              <p>Minggu 18.00 - 06.00 WIB</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Azizah Nasution</h4>
              <p>Sabtu 18.00 - 06.00 WIB</p>
              <p>Minggu 08.00 - 17.00 WIB</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Dokter KIA Kandungan</Accordion.Header>
            <Accordion.Body>
              <h4>Dokter Uce Siswi Trihesti SpOG</h4>
              <p>Rabu dan Sabtu</p>
              <p>11.30 - 14.30 WIB</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Bd. Meity Aderia Bawoel, STr, Keb.</h4>
              <p>24 Jam</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Bd. Umi Khairun Nisah, STr, Keb.</h4>
              <p>24 Jam</p>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    </>
  );
}
