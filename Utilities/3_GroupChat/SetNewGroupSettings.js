/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

/*
GROUP SETTINGS:

- No member limit for any group
- Anyone can change group name, description and image
- Admins can ban members from joining again
- Everyone can see who is online in the group
- New Members can see chat history

Community Channel:
- Publicly visible
- Join to view members and messages

Private Group:
- Not visible Publicly
- Members can add more members
- People can join via link

*/

function SetNewGroupSettings(xmpp, jid) {
  console.log('Setting jid:', jid)
  console.log("SetNewGroupSettings")
  const {iqCaller} = xmpp
  const type = 'channel'
  if (type === 'channel') {
    const iq = (
      <iq
          to= {jid}
          type='set'>
          <query xmlns='http://jabber.org/protocol/muc#owner'>
            <x xmlns='jabber:x:data' type='submit'>
              <title>
                Configuration of room test@bitspilani.getassist.app
              </title>
              <field var='FORM_TYPE'>
                <value>http://jabber.org/protocol/muc#roomconfig</value>
              </field>
              <field type='text-single' label='Room title' var='muc#roomconfig_roomname'>
                <value>Test</value>
              </field>
              <field type='text-single' label='Room description' var='muc#roomconfig_roomdesc'>
                <value>Test Description</value>
              </field>
              <field type='boolean' label='Make room persistent' var='muc#roomconfig_persistentroom'>
                <value>1</value>
              </field>
              <field type='boolean' label='Make room public searchable' var='muc#roomconfig_publicroom'>
                <value>1</value>
              </field>
              <field type='boolean' label='Make participants list public' var='public_list'>
                <value>1</value>
              </field>
              <field type='boolean' label='Make room password protected' var='muc#roomconfig_passwordprotectedroom'>
                <value>0</value>
              </field>
              <field type='text-private' label='Password' var='muc#roomconfig_roomsecret'>
                <value></value>
              </field>
              <field type='list-single' label='Maximum Number of Occupants' var='muc#roomconfig_maxusers'>
                <value>200</value>
              </field>
              <field type='list-single' label='Present real Jabber IDs to' var='muc#roomconfig_whois'>
                <value>moderators</value>
              </field>
              <field type='list-multi' label='Roles for which Presence is Broadcasted' var='muc#roomconfig_presencebroadcast'>
                <value>participant</value>
              </field>
              <field type='boolean' label='Make room members-only' var='muc#roomconfig_membersonly'>
                <value>1</value>
              </field>
              <field type='boolean' label='Make room moderated' var='muc#roomconfig_moderatedroom'>
                <value>1</value>
              </field>
              <field type='boolean' label='Default users as participants' var='members_by_default'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow users to change the subject' var='muc#roomconfig_changesubject'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow users to send private messages' var='allow_private_messages'>
                <value>1</value>
              </field><field type='list-single' label='Allow visitors to send private messages to' var='allow_private_messages_from_visitors'>
                <value>anyone</value>
              </field>
              <field type='boolean' label='Allow users to query other users' var='allow_query_users'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow users to send invites' var='muc#roomconfig_allowinvites'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow visitors to send status text in presence updates' var='muc#roomconfig_allowvisitorstatus'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow visitors to change nickname' var='muc#roomconfig_allowvisitornickchange'>
                <value>1</value>
              </field>
              <field type='boolean' label='Allow visitors to send voice requests' var='muc#roomconfig_allowvoicerequests'>
                <value>1</value>
              </field><field type='boolean' label='Allow subscription' var='muc#roomconfig_allow_subscription'>
                <value>0</value>
              </field>
              <field type='text-single' label='Minimum interval between voice requests (in seconds)' var='muc#roomconfig_voicerequestmininterval'>
                <value>1</value>
              </field>
              <field type='jid-multi' label='Exclude Jabber IDs from CAPTCHA challenge' var='muc#roomconfig_captcha_whitelist'/>
              <field type='boolean' label='Enable message archiving' var='muc#roomconfig_mam'>
                <value>1</value>
              </field>
            </x>
          </query>
      </iq>
    )
    const response = iqCaller.request(iq)
    console.log(response)
  }
  const response = iqCaller.request(iq)
  console.log(response)
}

export default SetNewGroupSettings


/*
GROUP SETTINGS:

- No member limit for any group
- Anyone can change group name, description and image
- Admins can ban members from joining again
- Everyone can see who is online in the group
- New Members can see chat history

Community Channel:
- Publicly visible
- Join to view members and messages

Private Group:
- Not visible Publicly
- Members can add more members
- People can join via link

*/
