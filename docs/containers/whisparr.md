---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29648" onclick="CopyToClipboard('tag29648');return false;" class="tag-decoration">nightly</div><div id="tag28970" onclick="CopyToClipboard('tag28970');return false;" class="tag-decoration">nightly-2.0.0.2081</div><div id="tag19492" onclick="CopyToClipboard('tag19492');return false;" class="tag-decoration">nightly-1d22852</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/1d2285299c36c18935127a2bf738809d8cce632d" target="_blank">Version update: 2.0.0.2075 => 2.0.0.2081</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20808263266" target="_blank">2026-01-08 06:49:18</a></td></tr>
<tr><td><div id="tag1395" onclick="CopyToClipboard('tag1395');return false;" class="tag-decoration">v3</div><div id="tag24727" onclick="CopyToClipboard('tag24727');return false;" class="tag-decoration">v3-3.1.0.2066</div><div id="tag25313" onclick="CopyToClipboard('tag25313');return false;" class="tag-decoration">v3-4f6beab</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4f6beab78969df6f714864a1023d16fe1f2332eb" target="_blank">Version update: 3.1.0.2064 => 3.1.0.2066</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20771696550" target="_blank">2026-01-07 05:31:35</a></td></tr>
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
