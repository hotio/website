---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29607" onclick="CopyToClipboard('tag29607');return false;" class="tag-decoration">release</div><div id="tag24885" onclick="CopyToClipboard('tag24885');return false;" class="tag-decoration">release-0.24.739</div><div id="tag7285" onclick="CopyToClipboard('tag7285');return false;" class="tag-decoration">release-4a93143</div><div id="tag21089" onclick="CopyToClipboard('tag21089');return false;" class="tag-decoration">release-v0</div><div id="tag30419" onclick="CopyToClipboard('tag30419');return false;" class="tag-decoration">release-v0.24</div><div id="tag9255" onclick="CopyToClipboard('tag9255');return false;" class="tag-decoration">release-v0.24.739</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4a931434307c5b2a91a809f92050432b428e3a10" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20770098424" target="_blank">2026-01-07 03:57:18</a></td></tr>
<tr><td><div id="tag10924" onclick="CopyToClipboard('tag10924');return false;" class="tag-decoration">testing</div><div id="tag1183" onclick="CopyToClipboard('tag1183');return false;" class="tag-decoration">testing-0.24.739</div><div id="tag3190" onclick="CopyToClipboard('tag3190');return false;" class="tag-decoration">testing-26e5dfa</div><div id="tag10640" onclick="CopyToClipboard('tag10640');return false;" class="tag-decoration">testing-v0</div><div id="tag14820" onclick="CopyToClipboard('tag14820');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15837" onclick="CopyToClipboard('tag15837');return false;" class="tag-decoration">testing-v0.24.739</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/26e5dfa8801cf123f87d7dbbc163cdc1fb426e09" target="_blank">Version update: 0.24.726 => 0.24.739</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20739381106" target="_blank">2026-01-06 05:45:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name jackett \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
