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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13427" onclick="CopyToClipboard('tag13427');return false;" class="tag-decoration">nightly</div><div id="tag14250" onclick="CopyToClipboard('tag14250');return false;" class="tag-decoration">nightly-2.0.0.2081</div><div id="tag11228" onclick="CopyToClipboard('tag11228');return false;" class="tag-decoration">nightly-83008ba</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/83008ba282b6d1e5dfcc25e98993a5fba93e3119" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20898169752" target="_blank">2026-01-11 16:18:01</a></td></tr>
<tr><td><div id="tag21076" onclick="CopyToClipboard('tag21076');return false;" class="tag-decoration">v3</div><div id="tag26457" onclick="CopyToClipboard('tag26457');return false;" class="tag-decoration">v3-3.1.0.2101</div><div id="tag6977" onclick="CopyToClipboard('tag6977');return false;" class="tag-decoration">v3-43961d7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/43961d7ee4f301a2e055a4d7b32bd4660f90f311" target="_blank">Version update: 3.1.0.2100 => 3.1.0.2101</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20907691462" target="_blank">2026-01-12 04:03:35</a></td></tr>
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
