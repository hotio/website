---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2874" onclick="CopyToClipboard('tag2874');return false;" class="tag-decoration">v2</div><div id="tag19343" onclick="CopyToClipboard('tag19343');return false;" class="tag-decoration">v2-df6e6f8</div><div id="tag21465" onclick="CopyToClipboard('tag21465');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/df6e6f8c5967d6824860dbceb82f318cca5edcfd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21244738302" target="_blank">2026-01-22 10:20:26</a></td></tr>
<tr><td><div id="tag13253" onclick="CopyToClipboard('tag13253');return false;" class="tag-decoration">v3</div><div id="tag4518" onclick="CopyToClipboard('tag4518');return false;" class="tag-decoration">v3-f7cf48c</div><div id="tag19603" onclick="CopyToClipboard('tag19603');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag4012" onclick="CopyToClipboard('tag4012');return false;" class="tag-decoration">v3-v3</div><div id="tag10366" onclick="CopyToClipboard('tag10366');return false;" class="tag-decoration">v3-v3.2</div><div id="tag13499" onclick="CopyToClipboard('tag13499');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f7cf48c5f8ba9c78ed8abfbb21af74590a650ecc" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21243886348" target="_blank">2026-01-22 09:52:38</a></td></tr>
<tr><td><div id="tag14134" onclick="CopyToClipboard('tag14134');return false;" class="tag-decoration">v3-develop</div><div id="tag29679" onclick="CopyToClipboard('tag29679');return false;" class="tag-decoration">v3-develop-a378a42</div><div id="tag12927" onclick="CopyToClipboard('tag12927');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag26103" onclick="CopyToClipboard('tag26103');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26940" onclick="CopyToClipboard('tag26940');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag1333" onclick="CopyToClipboard('tag1333');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a378a4262f27738587cc2ad41e92faae78bf312d" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21243884641" target="_blank">2026-01-22 09:52:35</a></td></tr>
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
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
