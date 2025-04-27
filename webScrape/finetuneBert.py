from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer, TrainingArguments

# Load your dataset
dataset = load_dataset('csv', data_files='./webScrape/dataset.csv')

# Split train/test
dataset = dataset['train'].train_test_split(test_size=0.1)

# Load tokenizer + model
model_name = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)

# Tokenize
def preprocess(examples):
    return tokenizer(examples['text'], truncation=True, padding=True)

tokenized = dataset.map(preprocess, batched=True)

# Training args
args = TrainingArguments(
    output_dir="/models/finetuned_distilbert",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    num_train_epochs=3,
    weight_decay=0.01,
)

# Trainer
trainer = Trainer(
    model=model,
    args=args,
    train_dataset=tokenized['train'],
    eval_dataset=tokenized['test'],
)

# Fine-tune
trainer.train()

# Save
model.save_pretrained("./models/finetuned_distilbert")
tokenizer.save_pretrained("./models/finetuned_distilbert")
