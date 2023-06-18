import React from "react";
import {
  ExpandableForm,
  SectionHeader
} from "mcp-library-shared-react-components";
import { Layout } from "../../../Layout";
import { useNavigate } from "react-router-dom";
import {
  createPartiesRequest,
  PersonDetails,
  disableAndEnableNextAndBackButtons
} from "../../../../util";
import { AddVehiclesInnerForm } from "./add-vehicles-inner-form.component";
import {
  saveVehicle,
  VehicleDetails,
  VehicleDriverType,
  VehicleOwnerType,
  useAppDispatch,
  useAppSelector
} from "../../../../redux";

export const AddVehicles: React.FC = () => {
  const dispatch = useAppDispatch();
  const { insuredVehicle, vehicleList } = useAppSelector(
    (state) => state.vehicleDetails
  );
  const parties = useAppSelector((state) => state.parties.allParties);

  const navigate = useNavigate();
  sessionStorage.removeItem("vehicleLevel");

  const handleSaveClick = async (
    vehicleDetails: VehicleDetails,
    shouldNavigate: boolean,
    personDetails: PersonDetails
  ) => {
    let vehicleOwnerId = vehicleDetails.vehicleOwnerId;
    let vehicleDriverId = vehicleDetails.vehicleDriverId;
    let notListedDriverId = vehicleDetails.notListedDriverId;
    let notListedOwnerId = vehicleDetails.notListedOwnerId;
    let primaryOwnerType = vehicleDetails.primaryOwnerType;
    let primaryDriverType = vehicleDetails.primaryDriverType;
    let secondaryOwnerType = vehicleDetails.secondaryOwnerType;
    let secondaryDriverType = vehicleDetails.secondaryDriverType;

    const partiesRequest = createPartiesRequest(
      vehicleDetails,
      personDetails,
      parties
    );

    if (partiesRequest.vehicleOwnerId) {
      vehicleOwnerId = partiesRequest.vehicleOwnerId;
    }
    if (partiesRequest.vehicleDriverId) {
      vehicleDriverId = partiesRequest.vehicleDriverId;
    }

    if (
      !notListedDriverId &&
      vehicleDetails.primaryDriverType !== VehicleDriverType.Listed
    ) {
      notListedDriverId = vehicleDriverId;
    }
    if (
      !notListedOwnerId &&
      vehicleDetails.primaryOwnerType !== VehicleOwnerType.Listed
    ) {
      notListedOwnerId = vehicleOwnerId;
    }

    // To display correct party as the selected person, when editing this entry in future flow
    if (
      vehicleDetails.primaryOwnerType !== VehicleOwnerType.Company &&
      vehicleDetails.primaryOwnerType !== VehicleOwnerType.Listed &&
      vehicleDetails.primaryOwnerType !== VehicleOwnerType.SomeoneNotListed
    ) {
      primaryOwnerType = VehicleOwnerType.Listed;
    }

    if (
      vehicleDetails.primaryDriverType !== VehicleDriverType.NoOne &&
      vehicleDetails.primaryDriverType !== VehicleDriverType.Listed &&
      vehicleDetails.primaryDriverType !== VehicleDriverType.SomeoneNotListed
    ) {
      primaryDriverType = VehicleDriverType.Listed;
    }

    if (
      vehicleDetails.secondaryOwnerType !== VehicleOwnerType.Listed &&
      vehicleDetails.secondaryOwnerType !== VehicleOwnerType.SomeoneNotListed
    ) {
      secondaryOwnerType = VehicleOwnerType.Listed;
    }

    if (
      vehicleDetails.secondaryDriverType !== VehicleDriverType.Listed &&
      vehicleDetails.secondaryDriverType !== VehicleDriverType.SomeoneNotListed
    ) {
      secondaryDriverType = VehicleDriverType.Listed;
    }

    const vehicleRequestBody = {
      vehiclesToAdd: [
        {
          ...vehicleDetails,
          vehicleOwnerId,
          vehicleDriverId,
          notListedDriverId,
          notListedOwnerId,
          primaryDriverType,
          primaryOwnerType,
          secondaryOwnerType,
          secondaryDriverType
        }
      ]
    };

    dispatch(
      saveVehicle(
        vehicleRequestBody,
        false,
        null,
        null,
        navigate,
        null,
        {
          partiesToAdd: partiesRequest.partiesToAdd
        },
        shouldNavigate
      )
    );
  };

  const listItems = [insuredVehicle, ...vehicleList];

  const onClickOfAddButton = () => {
    disableAndEnableNextAndBackButtons(true);
  };

  const onClickOfEditButton = () => {
    disableAndEnableNextAndBackButtons(true);
  };

  const enableNextAndBackButtons = () => {
    disableAndEnableNextAndBackButtons(false);
  };

  return (
    <Layout
      nextText="Next"
      backText="Back"
      handleNextClick={() => {
        navigate("../add-damaged-property");
      }}
      handleBackClick={() => navigate(-1)}
    >
      <SectionHeader
        headerText="Add vehicles that were involved in the incident."
        sectionModifier="claim"
      />
      <ExpandableForm
        items={listItems}
        id="addVehicleExpandableForm"
        InnerForm={(props) => (
          <AddVehiclesInnerForm
            {...props}
            handleSaveClick={handleSaveClick}
            onClickOfAddButton={onClickOfAddButton}
            onClickOfEditButton={onClickOfEditButton}
            enableNextAndBackButtons={enableNextAndBackButtons}
          />
        )}
      />
    </Layout>
  );
};
