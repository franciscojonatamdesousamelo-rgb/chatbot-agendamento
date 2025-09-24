CREATE TABLE pacientes (id SERIAL PRIMARY KEY, nome TEXT, sus_numero TEXT UNIQUE, telefone TEXT);
CREATE TABLE escalas (id SERIAL PRIMARY KEY, especialidade TEXT, data DATE, fichas_disponiveis INT);
CREATE TABLE agendamentos (id SERIAL PRIMARY KEY, escala_id INT REFERENCES escalas(id), paciente_id INT REFERENCES pacientes(id), horario TIME);