---
hide:
  - toc
title: hotio/autoscan
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25195" onclick="CopyToClipboard('tag25195');return false;" class="tag-decoration">nightly</div><div id="tag21557" onclick="CopyToClipboard('tag21557');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag27681" onclick="CopyToClipboard('tag27681');return false;" class="tag-decoration">nightly-6bd16ae</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/6bd16aee8327f89b9ff5625e88daafd1a8577483" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20895137724" target="_blank">2026-01-11 12:28:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27693" onclick="CopyToClipboard('tag27693');return false;" class="tag-decoration">release</div><div id="tag23542" onclick="CopyToClipboard('tag23542');return false;" class="tag-decoration">release-1.4.0</div><div id="tag373" onclick="CopyToClipboard('tag373');return false;" class="tag-decoration">release-bdd664b</div><div id="tag32165" onclick="CopyToClipboard('tag32165');return false;" class="tag-decoration">release-v1</div><div id="tag22363" onclick="CopyToClipboard('tag22363');return false;" class="tag-decoration">release-v1.4</div><div id="tag16541" onclick="CopyToClipboard('tag16541');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/bdd664b457b9a959504bf3fb5cec3e4405ed47d5" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20898156559" target="_blank">2026-01-11 16:16:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="autoscan" \
        -p 3030:3030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
        ports:
          - "3030:3030"
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
