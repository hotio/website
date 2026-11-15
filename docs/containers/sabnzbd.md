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
<tr><td><div id="tag28059" onclick="CopyToClipboard('tag28059');return false;" class="tag-decoration">nightly</div><div id="tag5741" onclick="CopyToClipboard('tag5741');return false;" class="tag-decoration">nightly-0832767</div><div id="tag16641" onclick="CopyToClipboard('tag16641');return false;" class="tag-decoration">nightly-80c7d979386f9ac132730118301cd6b9c3bd7ce1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0832767f3a531b97665000b8def6cd671935a89b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/43741765476" target="_blank">2026-11-15 17:33:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27385" onclick="CopyToClipboard('tag27385');return false;" class="tag-decoration">release</div><div id="tag29087" onclick="CopyToClipboard('tag29087');return false;" class="tag-decoration">release-40a6750</div><div id="tag17604" onclick="CopyToClipboard('tag17604');return false;" class="tag-decoration">release-5.1.3</div><div id="tag10431" onclick="CopyToClipboard('tag10431');return false;" class="tag-decoration">release-v5</div><div id="tag11911" onclick="CopyToClipboard('tag11911');return false;" class="tag-decoration">release-v5.1</div><div id="tag23881" onclick="CopyToClipboard('tag23881');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag14938" onclick="CopyToClipboard('tag14938');return false;" class="tag-decoration">testing</div><div id="tag5108" onclick="CopyToClipboard('tag5108');return false;" class="tag-decoration">testing-4e192d8</div><div id="tag4558" onclick="CopyToClipboard('tag4558');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4e192d871748c3fcd096dac8c789091f6d22f70b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/43473428686" target="_blank">2026-11-13 17:30:13</a></td></tr>
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
