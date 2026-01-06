---
hide:
  - toc
title: hotio/whisparr
---

--8<-- "includes/header-links.md"

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31003" onclick="CopyToClipboard('tag31003');return false;" class="tag-decoration">nightly</div><div id="tag17190" onclick="CopyToClipboard('tag17190');return false;" class="tag-decoration">nightly-2.0.0.1953</div><div id="tag6826" onclick="CopyToClipboard('tag6826');return false;" class="tag-decoration">nightly-c1c5ea6</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/null">Upstream image update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20690795678">2026-01-04 09:23:23</a></td></tr>
<tr><td><div id="tag10738" onclick="CopyToClipboard('tag10738');return false;" class="tag-decoration">v3</div><div id="tag20321" onclick="CopyToClipboard('tag20321');return false;" class="tag-decoration">v3-3.1.0.2055</div><div id="tag10" onclick="CopyToClipboard('tag10');return false;" class="tag-decoration">v3-ff2d77c</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/ff2d77c5c4d404de46a07b0c88b64fc6c677fd3c">Version update: 3.1.0.2052 => 3.1.0.2055</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20734242740">2026-01-06 01:01:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name whisparr \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
