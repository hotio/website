---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15526" onclick="CopyToClipboard('tag15526');return false;" class="tag-decoration">v2</div><div id="tag1459" onclick="CopyToClipboard('tag1459');return false;" class="tag-decoration">v2-1e66125</div><div id="tag27986" onclick="CopyToClipboard('tag27986');return false;" class="tag-decoration">v2-2.1.0-release.6</div><div id="tag7960" onclick="CopyToClipboard('tag7960');return false;" class="tag-decoration">v2-v2</div><div id="tag16198" onclick="CopyToClipboard('tag16198');return false;" class="tag-decoration">v2-v2.1</div><div id="tag31546" onclick="CopyToClipboard('tag31546');return false;" class="tag-decoration">v2-v2.1.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1e6612588dc989c0ab5aeabbdf7f2a9b00880960" target="_blank">v2</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21276593646" target="_blank">2026-01-23 06:11:02</a></td></tr>
<tr><td><div id="tag20498" onclick="CopyToClipboard('tag20498');return false;" class="tag-decoration">v2-develop</div><div id="tag19288" onclick="CopyToClipboard('tag19288');return false;" class="tag-decoration">v2-develop-a1a9628</div><div id="tag22896" onclick="CopyToClipboard('tag22896');return false;" class="tag-decoration">v2-develop-2.1.0-develop.21</div><div id="tag31085" onclick="CopyToClipboard('tag31085');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13954" onclick="CopyToClipboard('tag13954');return false;" class="tag-decoration">v2-develop-v2.1</div><div id="tag19267" onclick="CopyToClipboard('tag19267');return false;" class="tag-decoration">v2-develop-v2.1.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a1a9628e2bdd99ebe9cb3ca33c209a616d0f9fa9" target="_blank">update description</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21276670406" target="_blank">2026-01-23 06:15:32</a></td></tr>
<tr><td><div id="tag15221" onclick="CopyToClipboard('tag15221');return false;" class="tag-decoration">v3</div><div id="tag29631" onclick="CopyToClipboard('tag29631');return false;" class="tag-decoration">v3-e873ce0</div><div id="tag29831" onclick="CopyToClipboard('tag29831');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag2341" onclick="CopyToClipboard('tag2341');return false;" class="tag-decoration">v3-v3</div><div id="tag30894" onclick="CopyToClipboard('tag30894');return false;" class="tag-decoration">v3-v3.2</div><div id="tag11290" onclick="CopyToClipboard('tag11290');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e873ce0709c70b79223edf310524bb00443f42c7" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246785852" target="_blank">2026-01-22 11:30:08</a></td></tr>
<tr><td><div id="tag28073" onclick="CopyToClipboard('tag28073');return false;" class="tag-decoration">v3-develop</div><div id="tag5068" onclick="CopyToClipboard('tag5068');return false;" class="tag-decoration">v3-develop-9ec0974</div><div id="tag18524" onclick="CopyToClipboard('tag18524');return false;" class="tag-decoration">v3-develop-3.2.1-develop.76</div><div id="tag22037" onclick="CopyToClipboard('tag22037');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4453" onclick="CopyToClipboard('tag4453');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag27519" onclick="CopyToClipboard('tag27519');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9ec0974153113cecfc2b6d662cfc7a385dc93fdd" target="_blank">Version update: 3.2.1-develop.74 => 3.2.1-develop.76</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21262860471" target="_blank">2026-01-22 19:55:53</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
