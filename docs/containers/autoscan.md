---
hide:
  - toc
title: hotio/autoscan
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/autoscan/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2704" onclick="CopyToClipboard('tag2704');return false;" class="tag-decoration">nightly</div><div id="tag16481" onclick="CopyToClipboard('tag16481');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag31851" onclick="CopyToClipboard('tag31851');return false;" class="tag-decoration">nightly-0dae539</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/0dae53970fe454b8aa88c7bfddde83fd91db3995" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20845754551" target="_blank">2026-01-09 08:22:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9783" onclick="CopyToClipboard('tag9783');return false;" class="tag-decoration">release</div><div id="tag1589" onclick="CopyToClipboard('tag1589');return false;" class="tag-decoration">release-1.4.0</div><div id="tag25662" onclick="CopyToClipboard('tag25662');return false;" class="tag-decoration">release-c6f7267</div><div id="tag13146" onclick="CopyToClipboard('tag13146');return false;" class="tag-decoration">release-v1</div><div id="tag4992" onclick="CopyToClipboard('tag4992');return false;" class="tag-decoration">release-v1.4</div><div id="tag25514" onclick="CopyToClipboard('tag25514');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/c6f72676dde8304035088a0bc70308ef2efe6467" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20845754888" target="_blank">2026-01-09 08:22:03</a></td></tr>
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
