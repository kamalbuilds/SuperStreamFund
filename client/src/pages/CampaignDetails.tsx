// @ts-nocheck
import {
  Card,
  Container,
  Flex,
  Loader,
  LoadingOverlay,
  Progress,
  Text,
  Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useLocation, useParams } from "react-router-dom";
import { z } from "zod";
import { DisplayCampaignsCardProps } from "../components/DisplayCampaigns";
import { FORM_ERROR } from "../components/Form";
import { FundForm } from "../components/FundForm";
import { useAppState } from "../context";
import { calculateBarPercentage, daysLeft } from "../utils";
import {CreateFlow} from "../components/superfluid/createFlow";
import Lens from "../components/Lens";
import SuperfluidWidget from '@superfluid-finance/widget';
import superTokenList from "@superfluid-finance/tokenlist";
import wdata from "../components/widget.json";
import { useMemo , useState } from "react";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { projectId , ethereumClient } from "../utils/wagmi_client";

export const CreateFundValidation = z.object({
  amount: z.number().min(0.0000001),
});

const CampaignDetails = () => {
  const { id } = useParams();
  const { open, isOpen } = useWeb3Modal();
  const walletManager = useMemo(
    () => ({
      open,
      isOpen,
    }),
    [open, isOpen]
  );

  console.log({ id });

  const { contract, address } = useAppState();

  const { data, isLoading } = useContractRead(contract, "getCampaign", id);

  const { mutateAsync: donateCampaign } = useContractWrite(
    contract,
    "donateToCampaign"
  );

  if (isLoading) {
    return <Loader />;
  }

  console.log({ data });


  const typedState = {
    ...data,
    target: ethers.utils.formatEther(data.target.toString()),
    amountCollected: ethers.utils.formatEther(data.amountCollected.toString()),
    deadline: new Date(data.deadline.toNumber()),
  } as DisplayCampaignsCardProps;

  console.log({ typedState });
  const percent = calculateBarPercentage(
    parseFloat(typedState.target),
    parseFloat(typedState.amountCollected)
  );

  const projectId = "bc20036f3357961ba887b57144d0791e";


  

  return (
    <Container>
      <Flex gap={5} justify="space-between">
        <div>
          <div>
            <img
              className="rounded-3xl  h-124 w-124  aspect-video"
              src={typedState.image}
              alt="Campaign"
            />

            <div className="flex space-x-5 items-center my-5">
              <Progress value={percent} className="w-full" />

              <Text className="whitespace-nowrap">{percent} %</Text>
            </div>
          </div>

          <Title order={1}>{typedState.title}</Title>
        </div>

        <div className="flex flex-col text-center space-y-5">
          <Card radius="xl" p={0}>
            <Title p={15} order={2}>
              {typedState.amountCollected}
            </Title>
            <Text bg="gray" p={15} className="rounded-lg mt-1 w-full">
              Raised of {typedState.target}{" "}
            </Text>
          </Card>

          <Card radius="xl" p={0}>
            <Title p={15} order={2}>
              {daysLeft(typedState.deadline)}
            </Title>
            <Text bg="gray" p={15} className="rounded-lg mt-1 w-full">
              Day left
            </Text>
          </Card>

          <Card radius="xl" p={0}>
            <Title p={15} order={2}>
              {typedState.donators.length}
            </Title>
            <Text bg="gray" p={15} className="rounded-lg mt-1 w-full">
              Total Backers
            </Text>
          </Card>
        </div>
      </Flex>

      <div className="grid md:grid-cols-2 gap-5 ">
        <div>
          <div>
            <Title order={3} mt={15}>
              Creator{" "}
            </Title>
            <Text>{typedState.owner}</Text>
          </div>
          <div>
            <Title order={3} mt={15}>
              Story{" "}
            </Title>
            <Text>{typedState.description}</Text>
          </div>

          <div>
            <Title order={3} mt={15}>
              Donators{" "}
            </Title>
            {typedState.donators && typedState.donators.length > 0 ? (
              typedState.donators.map((donator: any) => <Text>{donator}</Text>)
            ) : (
              <Text>No donators yet. Be the first one! </Text>
            )}
          </div>
          <Lens />
        </div>

        <div>
          <div className="my-6">
            {!address ? (
              <Text>You need to connect your wallet to fund this campaign</Text>
            ) : (
            
              <FundForm
                submitText="Fund Campaign"
                schema={CreateFundValidation}
                initialValues={{}}
                onSubmit={async (values) => {
                  try {
                    await donateCampaign([
                      typedState.id,
                      {
                        value: ethers.utils.parseEther(
                          values.amount.toString()
                        ),
                      },
                    ]);

                    showNotification({
                      title: "Successfully funded",
                      message: "Thank you for funding this campaign",
                      color: "green",
                    });
                  } catch (error: any) {
                    console.log({ error: error });
                    showNotification({
                      title: "Something went wrong",
                      message: "Failed to fund",
                      color: "red",
                    });
                    return {
                      [FORM_ERROR]: error.reason,
                    };
                  }
                }}
              />
            )}
            <div className="my-8 mx-24">
                    <SuperfluidWidget
                      {...wdata}
                      tokenList={superTokenList}
                      type="drawer"
                      walletManager={walletManager}
                    >
                    {({ openModal }) => (
                      <button onClick={() => openModal()} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">Subscribe to the Campaign</button>
                    )}
                    </SuperfluidWidget>
                  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            </div>
          
          </div>
          <CreateFlow />
        </div>
      </div>
    </Container>
  );
};

export default CampaignDetails;
