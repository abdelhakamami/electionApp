import React from "react";
import { useState } from "react";
import ElectionList from "./show-election/ElectionList";
import AddElection from "./add-election/AddElection";
import Header from "../../components/header/Header";
import PageLayout from "../../components/page-layout/PageLayout";
import Container from "../../components/container/Container";


const AdminDashboard = () => {

  const [showModal, setShowModal] = useState(false);

  const handleNewElectionClick = () => {
    setShowModal(!showModal);
  };

  return (
    <PageLayout>
      <Header />
      <header className="bg-white shadow py-6">
        <Container>
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
            <div onClick={handleNewElectionClick}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
                New Election
              </button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <AddElection showModal={showModal} setShowModal={setShowModal} />
        <div className="py-6" >
          <Container>
            <ElectionList showModal={showModal} />
          </Container>
        </div>
      </main>
    </PageLayout>
  );
};

export default AdminDashboard;
