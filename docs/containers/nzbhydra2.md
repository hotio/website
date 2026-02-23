---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15296" onclick="CopyToClipboard('tag15296');return false;" class="tag-decoration">release</div><div id="tag6866" onclick="CopyToClipboard('tag6866');return false;" class="tag-decoration">release-4e3ce4f</div><div id="tag10193" onclick="CopyToClipboard('tag10193');return false;" class="tag-decoration">release-8.5.1</div><div id="tag9950" onclick="CopyToClipboard('tag9950');return false;" class="tag-decoration">release-v8</div><div id="tag11781" onclick="CopyToClipboard('tag11781');return false;" class="tag-decoration">release-v8.5</div><div id="tag18093" onclick="CopyToClipboard('tag18093');return false;" class="tag-decoration">release-v8.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4e3ce4fabe3da14902a964c151aa54b54b223c93" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/22292126863" target="_blank">2026-02-23 03:43:44</a></td></tr>
<tr><td><div id="tag17942" onclick="CopyToClipboard('tag17942');return false;" class="tag-decoration">testing</div><div id="tag24738" onclick="CopyToClipboard('tag24738');return false;" class="tag-decoration">testing-243899f</div><div id="tag7917" onclick="CopyToClipboard('tag7917');return false;" class="tag-decoration">testing-8.5.1</div><div id="tag23079" onclick="CopyToClipboard('tag23079');return false;" class="tag-decoration">testing-v8</div><div id="tag26105" onclick="CopyToClipboard('tag26105');return false;" class="tag-decoration">testing-v8.5</div><div id="tag29349" onclick="CopyToClipboard('tag29349');return false;" class="tag-decoration">testing-v8.5.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/243899f0fe8c12d820dde37cdb3636171cd603f4" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/22292127225" target="_blank">2026-02-23 03:43:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
