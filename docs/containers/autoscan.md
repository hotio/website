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
<tr><td><div id="tag10523" onclick="CopyToClipboard('tag10523');return false;" class="tag-decoration">nightly</div><div id="tag15001" onclick="CopyToClipboard('tag15001');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag10289" onclick="CopyToClipboard('tag10289');return false;" class="tag-decoration">nightly-d572a64</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/d572a64ca5e20e9d4abc6dd7f74d27b1cc2a87fd" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20842466195" target="_blank">2026-01-09 05:40:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9961" onclick="CopyToClipboard('tag9961');return false;" class="tag-decoration">release</div><div id="tag13206" onclick="CopyToClipboard('tag13206');return false;" class="tag-decoration">release-1.4.0</div><div id="tag24076" onclick="CopyToClipboard('tag24076');return false;" class="tag-decoration">release-45066c5</div><div id="tag5344" onclick="CopyToClipboard('tag5344');return false;" class="tag-decoration">release-v1</div><div id="tag29555" onclick="CopyToClipboard('tag29555');return false;" class="tag-decoration">release-v1.4</div><div id="tag18063" onclick="CopyToClipboard('tag18063');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/45066c5851485902f467f8f9110e2420dc5791e0" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20842466394" target="_blank">2026-01-09 05:40:27</a></td></tr>
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
