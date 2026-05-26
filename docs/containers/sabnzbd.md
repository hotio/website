---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag18426" onclick="CopyToClipboard('tag18426');return false;" class="tag-decoration">nightly</div><div id="tag2008" onclick="CopyToClipboard('tag2008');return false;" class="tag-decoration">nightly-5094400</div><div id="tag12818" onclick="CopyToClipboard('tag12818');return false;" class="tag-decoration">nightly-2c530fee47f4dfde6c7f158f1c3439a7039f248a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5094400c379fabbb56e86f24d85824f34675318d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26433334507" target="_blank">2026-05-26 05:03:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31172" onclick="CopyToClipboard('tag31172');return false;" class="tag-decoration">release</div><div id="tag27964" onclick="CopyToClipboard('tag27964');return false;" class="tag-decoration">release-d9901aa</div><div id="tag29665" onclick="CopyToClipboard('tag29665');return false;" class="tag-decoration">release-5.0.3</div><div id="tag27039" onclick="CopyToClipboard('tag27039');return false;" class="tag-decoration">release-v5</div><div id="tag12565" onclick="CopyToClipboard('tag12565');return false;" class="tag-decoration">release-v5.0</div><div id="tag15200" onclick="CopyToClipboard('tag15200');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag12176" onclick="CopyToClipboard('tag12176');return false;" class="tag-decoration">testing</div><div id="tag11123" onclick="CopyToClipboard('tag11123');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag5213" onclick="CopyToClipboard('tag5213');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag6658" onclick="CopyToClipboard('tag6658');return false;" class="tag-decoration">testing-v5</div><div id="tag25889" onclick="CopyToClipboard('tag25889');return false;" class="tag-decoration">testing-v5.0</div><div id="tag23389" onclick="CopyToClipboard('tag23389');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
