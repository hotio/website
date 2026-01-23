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
<tr><td><div id="tag18500" onclick="CopyToClipboard('tag18500');return false;" class="tag-decoration">nightly</div><div id="tag23889" onclick="CopyToClipboard('tag23889');return false;" class="tag-decoration">nightly-67fd9d2</div><div id="tag18383" onclick="CopyToClipboard('tag18383');return false;" class="tag-decoration">nightly-062dc9fa11d4a7bc42a81f0b8c9fb873bec3bf49</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/67fd9d20568754cb9d820a08311dea0c242ca78a" target="_blank">Version update: d215d4b0d7bb35b6fce90a0a96966a37a6f6a1fc => 062dc9fa11d4a7bc42a81f0b8c9fb873bec3bf49</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21278290366" target="_blank">2026-01-23 07:30:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2104" onclick="CopyToClipboard('tag2104');return false;" class="tag-decoration">release</div><div id="tag17934" onclick="CopyToClipboard('tag17934');return false;" class="tag-decoration">release-d82ce60</div><div id="tag4546" onclick="CopyToClipboard('tag4546');return false;" class="tag-decoration">release-4.5.5</div><div id="tag18299" onclick="CopyToClipboard('tag18299');return false;" class="tag-decoration">release-v4</div><div id="tag31809" onclick="CopyToClipboard('tag31809');return false;" class="tag-decoration">release-v4.5</div><div id="tag3010" onclick="CopyToClipboard('tag3010');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d82ce603362eba390d5d53c906cf4b17df45cc81" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21246772993" target="_blank">2026-01-22 11:29:40</a></td></tr>
<tr><td><div id="tag32156" onclick="CopyToClipboard('tag32156');return false;" class="tag-decoration">testing</div><div id="tag27088" onclick="CopyToClipboard('tag27088');return false;" class="tag-decoration">testing-64b88ca</div><div id="tag18032" onclick="CopyToClipboard('tag18032');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/64b88ca4f1b9cf654bfb2f81b6bf7d6a891eaf9e" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21246774064" target="_blank">2026-01-22 11:29:42</a></td></tr>
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
