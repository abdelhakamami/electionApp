import React from "react";
import { ClipLoader } from "react-spinners";
import Modal from "../../../components/modal/Modal";
import useAddElection from "./hooks/useAddElection";


const AddElection = ({ showModal, setShowModal }) => {

  const { formik, handleShowModal, isButtonLoading } = useAddElection(showModal, setShowModal);

  return (
    <>
      <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Add a new election"}>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="title"

            />
            {formik.errors.title && formik.touched.title ? (
              <p className="text-red-500 text-sm">
                {formik.errors.title}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            {formik.errors.description && formik.touched.description ? (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="start-date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            {formik.errors.startDate && formik.touched.startDate ? (
              <p className="text-red-500 text-sm">
                {formik.errors.startDate}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="end-date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            {formik.errors.endDate && formik.touched.endDate ? (
              <p className="text-red-500 text-sm">
                {formik.errors.endDate}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className={
              formik.isSubmitting
                ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 opacity-60"
                : "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }
          >
            <ClipLoader
              color={"4A90E2"}
              loading={isButtonLoading}
              size={20}
            />
            {formik.isSubmitting ? null : "Add election"}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddElection;
