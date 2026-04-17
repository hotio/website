---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag5869" onclick="CopyToClipboard('tag5869');return false;" class="tag-decoration">nightly</div><div id="tag30232" onclick="CopyToClipboard('tag30232');return false;" class="tag-decoration">nightly-2f51dd9</div><div id="tag31622" onclick="CopyToClipboard('tag31622');return false;" class="tag-decoration">nightly-51cc0dc3287279f4a6496e42ad1665484031fe74</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2f51dd98f34dcff6be948405d5b10aec63d82dbd" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552143912" target="_blank">2026-04-17 06:54:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8913" onclick="CopyToClipboard('tag8913');return false;" class="tag-decoration">release</div><div id="tag30510" onclick="CopyToClipboard('tag30510');return false;" class="tag-decoration">release-44df00d</div><div id="tag1103" onclick="CopyToClipboard('tag1103');return false;" class="tag-decoration">release-3.2.0</div><div id="tag5781" onclick="CopyToClipboard('tag5781');return false;" class="tag-decoration">release-v3</div><div id="tag30006" onclick="CopyToClipboard('tag30006');return false;" class="tag-decoration">release-v3.2</div><div id="tag207" onclick="CopyToClipboard('tag207');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/44df00dc5061c7be1c4f9b8ca686d9f40305746e" target="_blank">Version update: 3.1.1 => 3.2.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24478452558" target="_blank">2026-04-15 21:07:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
