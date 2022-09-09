import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    position: relative;

    #info {
        position: relative;
        width: 50%;
        max-width: 350px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 80px;
        gap: 10px;

        h1 {
            color: ${({ theme }) => theme.colors.lightGreen};
            text-transform: uppercase;
            padding: 3px;
            font-family: 'Anton';
            font-weight: 300;
            line-height: 2.4rem;
        }

        p {
            font-size: 12px;
            font-family: 'Rubik';
            font-weight: 300;
        }

        button {
            padding: 10px;
            width: 40%;
            min-width: 8rem;
            font-weight: bold;
            background: ${({ theme }) => theme.colors.navyBlue};
        }
    }

    #imgs-gta, #imgs-minecraft {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 25%;
        justify-content: flex-start;
        height: 37vmax;

       .boneco-gta {
            position: relative;
            border: 1px solid ${({ theme }) => theme.colors.lightGreen};
            width: 6rem;
            height: 6rem;
            border-radius: 20px 20px  0 20px;
            top: -2rem;

            img {
                position: absolute;
                top: -1.9rem;
                left: -0.3rem;
                width: 8rem;
            }
       }

       img {
            width: 100%;
            max-width: 450px;
        }
    }

    #imgs-minecraft {

        .boneco-minecraft {
            position: relative;
            background: ${({ theme }) => theme.colors.lightGreen};
            width: 6rem;
            height: 6rem;
            border: none;
            border-radius: 0 20px 20px 20px;
            bottom: -2rem;
            z-index: 5;

            img {
                position: absolute;
                top: -0.4rem;
                width: 5rem;
            }
        }


    }

    @media screen and (max-width: 600px) {
         #imgs-minecraft {
            .boneco-minecraft {

            width: 5rem;
            height: 5rem;

            img {
                position: absolute;
                top: -0.4rem;
                width: 4rem;
            }

            }
        }

         #imgs-gta {
            .boneco-gta {

            width: 5rem;
            height: 5rem;

            img {
                position: absolute;
                top: -0.4rem;
                width: 5.5rem;
            }

            }
        }
    }

`;
