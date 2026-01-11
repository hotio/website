---
hide:
  - toc
title: hotio/qui
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qui){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qui){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/autobrr/qui){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4815" onclick="CopyToClipboard('tag4815');return false;" class="tag-decoration">release</div><div id="tag23751" onclick="CopyToClipboard('tag23751');return false;" class="tag-decoration">release-1.12.0</div><div id="tag16251" onclick="CopyToClipboard('tag16251');return false;" class="tag-decoration">release-363f077</div><div id="tag5322" onclick="CopyToClipboard('tag5322');return false;" class="tag-decoration">release-v1</div><div id="tag27301" onclick="CopyToClipboard('tag27301');return false;" class="tag-decoration">release-v1.12</div><div id="tag30565" onclick="CopyToClipboard('tag30565');return false;" class="tag-decoration">release-v1.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qui/commit/363f077e3b94dacd8da4c1a2b65a995a01a513db" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/qui/actions/runs/20895144342" target="_blank">2026-01-11 12:29:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qui" \
        -p 7476:7476 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/qui
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qui:
        container_name: qui
        image: ghcr.io/hotio/qui
        ports:
          - "7476:7476"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
