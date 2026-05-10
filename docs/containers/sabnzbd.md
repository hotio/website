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
<tr><td><div id="tag20664" onclick="CopyToClipboard('tag20664');return false;" class="tag-decoration">nightly</div><div id="tag15218" onclick="CopyToClipboard('tag15218');return false;" class="tag-decoration">nightly-b112d0d</div><div id="tag29664" onclick="CopyToClipboard('tag29664');return false;" class="tag-decoration">nightly-7abb39d02d7833cc929e1379b0be6e9bfe7d5bd7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b112d0d74b24502082c518e0ce75acb806fa4682" target="_blank">Version update: 2668f1cd267ce13722c9f695337a8f7d134f3fba => 7abb39d02d7833cc929e1379b0be6e9bfe7d5bd7</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25626565414" target="_blank">2026-05-10 10:39:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2744" onclick="CopyToClipboard('tag2744');return false;" class="tag-decoration">release</div><div id="tag2005" onclick="CopyToClipboard('tag2005');return false;" class="tag-decoration">release-70618c1</div><div id="tag18024" onclick="CopyToClipboard('tag18024');return false;" class="tag-decoration">release-5.0.1</div><div id="tag2847" onclick="CopyToClipboard('tag2847');return false;" class="tag-decoration">release-v5</div><div id="tag26143" onclick="CopyToClipboard('tag26143');return false;" class="tag-decoration">release-v5.0</div><div id="tag8922" onclick="CopyToClipboard('tag8922');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/70618c1d37e8e032d3c5248918168c80911efd96" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060339" target="_blank">2026-05-09 15:44:05</a></td></tr>
<tr><td><div id="tag30240" onclick="CopyToClipboard('tag30240');return false;" class="tag-decoration">testing</div><div id="tag6666" onclick="CopyToClipboard('tag6666');return false;" class="tag-decoration">testing-9b582f1</div><div id="tag13610" onclick="CopyToClipboard('tag13610');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9b582f1b2e0a2a2b8850acc7f644cfc2e5e7f5a2" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060804" target="_blank">2026-05-09 15:44:06</a></td></tr>
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
