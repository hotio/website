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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28962" onclick="CopyToClipboard('tag28962');return false;" class="tag-decoration">nightly</div><div id="tag9109" onclick="CopyToClipboard('tag9109');return false;" class="tag-decoration">nightly-2.0.0.2081</div><div id="tag11496" onclick="CopyToClipboard('tag11496');return false;" class="tag-decoration">nightly-e294e0f</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/e294e0f99e3dbb9713d1a2e0bbb3e7d3571bea3b" target="_blank">use tag instead of digest</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20840057079" target="_blank">2026-01-09 03:20:39</a></td></tr>
<tr><td><div id="tag1467" onclick="CopyToClipboard('tag1467');return false;" class="tag-decoration">v3</div><div id="tag15407" onclick="CopyToClipboard('tag15407');return false;" class="tag-decoration">v3-3.1.0.2066</div><div id="tag4851" onclick="CopyToClipboard('tag4851');return false;" class="tag-decoration">v3-4f6beab</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4f6beab78969df6f714864a1023d16fe1f2332eb" target="_blank">Version update: 3.1.0.2064 => 3.1.0.2066</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20771696550" target="_blank">2026-01-07 05:31:35</a></td></tr>
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
