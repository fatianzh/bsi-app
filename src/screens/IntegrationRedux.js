// components/NoteForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, editNote } from '../action/actions';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const IntegrationRedux = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const [editedNote, setEditedNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);


  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      dispatch(addNote(noteText));
      setNoteText('');
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  const handleEditNote = (index) => {
    setEditedNote(notes[index]);
    setEditingIndex(index);
  };


  const handleSaveEdit = () => {
    if (editedNote !== '') {
      dispatch(editNote(editingIndex, editedNote));
      setEditedNote('');
      setEditingIndex(null);
    }
  };


  return (
    <View>
      <TextInput
        placeholder="Type your note here"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
      />
      <Button title="Add Note" onPress={handleAddNote} />
      <View>
        {notes.map((note, index) => (
          <View key={index} style={styles.noteContainer}>
            {editingIndex === index ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={setEditedNote}
                  value={editedNote}
                  placeholder="Edit your note"
                />
                <Button title="Save" onPress={handleSaveEdit} />
              </View>
            ) : (
              <>
                <Text style={styles.noteItem}>{note}</Text>
                <Button title="Edit" onPress={() => handleEditNote(index)} />
                <Button title="Delete" onPress={() => handleDeleteNote(index)} />
              </>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  noteItem: {
    flex: 1,
    fontSize: 16
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10
  }
});

export default IntegrationRedux;