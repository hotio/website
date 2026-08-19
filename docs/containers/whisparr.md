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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27832" onclick="CopyToClipboard('tag27832');return false;" class="tag-decoration">v2</div><div id="tag24050" onclick="CopyToClipboard('tag24050');return false;" class="tag-decoration">v2-9ae9357</div><div id="tag26758" onclick="CopyToClipboard('tag26758');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag12888" onclick="CopyToClipboard('tag12888');return false;" class="tag-decoration">v2-v2</div><div id="tag18213" onclick="CopyToClipboard('tag18213');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8396" onclick="CopyToClipboard('tag8396');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9ae93578d0de04f081e840e4bfbeee518f9a5cd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147774445" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag3915" onclick="CopyToClipboard('tag3915');return false;" class="tag-decoration">v2-develop</div><div id="tag12497" onclick="CopyToClipboard('tag12497');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag16457" onclick="CopyToClipboard('tag16457');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag1743" onclick="CopyToClipboard('tag1743');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2724" onclick="CopyToClipboard('tag2724');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6707" onclick="CopyToClipboard('tag6707');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag5037" onclick="CopyToClipboard('tag5037');return false;" class="tag-decoration">v3</div><div id="tag17016" onclick="CopyToClipboard('tag17016');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag15844" onclick="CopyToClipboard('tag15844');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag22829" onclick="CopyToClipboard('tag22829');return false;" class="tag-decoration">v3-v3</div><div id="tag14093" onclick="CopyToClipboard('tag14093');return false;" class="tag-decoration">v3-v3.3</div><div id="tag6872" onclick="CopyToClipboard('tag6872');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag22781" onclick="CopyToClipboard('tag22781');return false;" class="tag-decoration">v3-develop</div><div id="tag1331" onclick="CopyToClipboard('tag1331');return false;" class="tag-decoration">v3-develop-e3d4708</div><div id="tag20609" onclick="CopyToClipboard('tag20609');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1163</div><div id="tag30857" onclick="CopyToClipboard('tag30857');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20197" onclick="CopyToClipboard('tag20197');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31236" onclick="CopyToClipboard('tag31236');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e3d4708360c4f36c9397f1c22a82e75ee6a0e616" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32207602692" target="_blank">2026-08-19 02:10:24</a></td></tr>
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
