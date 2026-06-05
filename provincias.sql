--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2026-05-18 12:16:19

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16400)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    name character varying,
    full_name character varying,
    latitude numeric,
    longitude numeric,
    display_order integer,
    id integer NOT NULL
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: provinces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.provinces ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.provinces_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4779 (class 0 OID 16400)
-- Dependencies: 216
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('CABA', 'Ciudad Autónoma de Buenos Aires', -34.6037, -58.3816, 1, 1);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Buenos Aires', 'Provincia de Buenos Aires', -36.6769, -60.5588, 2, 2);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Catamarca', 'Provincia de Catamarca', -28.4696, -65.7852, 3, 3);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Chaco', 'Provincia del Chaco', -27.4514, -58.9867, 4, 4);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Chubut', 'Provincia del Chubut', -43.3002, -65.1023, 5, 5);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Córdoba', 'Provincia de Córdoba', -31.4201, -64.1888, 6, 6);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Corrientes', 'Provincia de Corrientes', -27.4692, -58.8306, 7, 7);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Entre Ríos', 'Provincia de Entre Ríos', -31.7319, -60.5238, 8, 8);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Formosa', 'Provincia de Formosa', -26.1775, -58.1781, 9, 9);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Jujuy', 'Provincia de Jujuy', -24.1858, -65.2995, 10, 10);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('La Pampa', 'Provincia de La Pampa', -36.6167, -64.2833, 11, 11);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('La Rioja', 'Provincia de La Rioja', -29.4131, -66.8558, 12, 12);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Mendoza', 'Provincia de Mendoza', -32.8895, -68.8458, 13, 13);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Misiones', 'Provincia de Misiones', -27.3621, -55.9009, 14, 14);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Neuquén', 'Provincia del Neuquén', -38.9516, -68.0591, 15, 15);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Río Negro', 'Provincia de Río Negro', -40.8135, -63.0000, 16, 16);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Salta', 'Provincia de Salta', -24.7821, -65.4232, 17, 17);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('San Juan', 'Provincia de San Juan', -31.5375, -68.5364, 18, 18);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('San Luis', 'Provincia de San Luis', -33.2950, -66.3356, 19, 19);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Santa Cruz', 'Provincia de Santa Cruz', -51.6230, -69.2168, 20, 20);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Santa Fe', 'Provincia de Santa Fe', -31.6333, -60.7000, 21, 21);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Santiago del Estero', 'Provincia de Santiago del Estero', -27.7951, -64.2615, 22, 22);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54.8019, -68.3030, 23, 23);
INSERT INTO public.provinces OVERRIDING SYSTEM VALUE VALUES ('Tucumán', 'Provincia de Tucumán', -26.8241, -65.2226, 24, 24);


--
-- TOC entry 4785 (class 0 OID 0)
-- Dependencies: 215
-- Name: provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provinces_id_seq', 24, true);


--
-- TOC entry 4634 (class 2606 OID 16406)
-- Name: provinces newtable_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT newtable_pk PRIMARY KEY (id);


-- Completed on 2026-05-18 12:16:19

--
-- PostgreSQL database dump complete
--

