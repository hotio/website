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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23401" onclick="CopyToClipboard('tag23401');return false;" class="tag-decoration">release</div><div id="tag11495" onclick="CopyToClipboard('tag11495');return false;" class="tag-decoration">release-036e099</div><div id="tag18273" onclick="CopyToClipboard('tag18273');return false;" class="tag-decoration">release-8.5.2</div><div id="tag9457" onclick="CopyToClipboard('tag9457');return false;" class="tag-decoration">release-v8</div><div id="tag17178" onclick="CopyToClipboard('tag17178');return false;" class="tag-decoration">release-v8.5</div><div id="tag22466" onclick="CopyToClipboard('tag22466');return false;" class="tag-decoration">release-v8.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/036e099292f591b06cf14b085b2ad980ebc68b4e" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23180607897" target="_blank">2026-03-17 05:54:59</a></td></tr>
<tr><td><div id="tag9378" onclick="CopyToClipboard('tag9378');return false;" class="tag-decoration">testing</div><div id="tag24162" onclick="CopyToClipboard('tag24162');return false;" class="tag-decoration">testing-082de55</div><div id="tag16237" onclick="CopyToClipboard('tag16237');return false;" class="tag-decoration">testing-8.5.2</div><div id="tag3209" onclick="CopyToClipboard('tag3209');return false;" class="tag-decoration">testing-v8</div><div id="tag1037" onclick="CopyToClipboard('tag1037');return false;" class="tag-decoration">testing-v8.5</div><div id="tag15481" onclick="CopyToClipboard('tag15481');return false;" class="tag-decoration">testing-v8.5.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/082de55489748109d57e9990a211cd4efd744b23" target="_blank">Version update: 8.5.1 => 8.5.2</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23021397104" target="_blank">2026-03-12 20:03:43</a></td></tr>
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
