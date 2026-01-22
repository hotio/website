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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29576" onclick="CopyToClipboard('tag29576');return false;" class="tag-decoration">release</div><div id="tag9458" onclick="CopyToClipboard('tag9458');return false;" class="tag-decoration">release-afe1689</div><div id="tag3104" onclick="CopyToClipboard('tag3104');return false;" class="tag-decoration">release-0.24.900</div><div id="tag4048" onclick="CopyToClipboard('tag4048');return false;" class="tag-decoration">release-v0</div><div id="tag6713" onclick="CopyToClipboard('tag6713');return false;" class="tag-decoration">release-v0.24</div><div id="tag12955" onclick="CopyToClipboard('tag12955');return false;" class="tag-decoration">release-v0.24.900</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/afe1689f85cf9054b8aba197657bedfb98f9e801" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21244687110" target="_blank">2026-01-22 10:18:44</a></td></tr>
<tr><td><div id="tag13645" onclick="CopyToClipboard('tag13645');return false;" class="tag-decoration">testing</div><div id="tag9050" onclick="CopyToClipboard('tag9050');return false;" class="tag-decoration">testing-d0f4296</div><div id="tag8861" onclick="CopyToClipboard('tag8861');return false;" class="tag-decoration">testing-0.24.900</div><div id="tag1040" onclick="CopyToClipboard('tag1040');return false;" class="tag-decoration">testing-v0</div><div id="tag15638" onclick="CopyToClipboard('tag15638');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19111" onclick="CopyToClipboard('tag19111');return false;" class="tag-decoration">testing-v0.24.900</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d0f4296af3858a5fc5d572d7ab845a2f939ee894" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21244687981" target="_blank">2026-01-22 10:18:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
