---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30125" onclick="CopyToClipboard('tag30125');return false;" class="tag-decoration">nightly</div><div id="tag2762" onclick="CopyToClipboard('tag2762');return false;" class="tag-decoration">nightly-71314e5</div><div id="tag19702" onclick="CopyToClipboard('tag19702');return false;" class="tag-decoration">nightly-9d365facaa1a841ae691277e5f26f189960c26ca</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/71314e58629defe8c63582f5b258f76e11e032d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34216385271" target="_blank">2026-09-08 10:36:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29163" onclick="CopyToClipboard('tag29163');return false;" class="tag-decoration">release</div><div id="tag30006" onclick="CopyToClipboard('tag30006');return false;" class="tag-decoration">release-dbdc315</div><div id="tag3385" onclick="CopyToClipboard('tag3385');return false;" class="tag-decoration">release-5.1.3</div><div id="tag28439" onclick="CopyToClipboard('tag28439');return false;" class="tag-decoration">release-v5</div><div id="tag22623" onclick="CopyToClipboard('tag22623');return false;" class="tag-decoration">release-v5.1</div><div id="tag20212" onclick="CopyToClipboard('tag20212');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/dbdc315781a3bc7b7ab9957073a826ddd38e5043" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34216404540" target="_blank">2026-09-08 10:37:05</a></td></tr>
<tr><td><div id="tag18339" onclick="CopyToClipboard('tag18339');return false;" class="tag-decoration">testing</div><div id="tag8450" onclick="CopyToClipboard('tag8450');return false;" class="tag-decoration">testing-83250c7</div><div id="tag4191" onclick="CopyToClipboard('tag4191');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag9369" onclick="CopyToClipboard('tag9369');return false;" class="tag-decoration">testing-v5</div><div id="tag20640" onclick="CopyToClipboard('tag20640');return false;" class="tag-decoration">testing-v5.1</div><div id="tag828" onclick="CopyToClipboard('tag828');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83250c75a3e3a155345ab15df19201bdc2622892" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33910423620" target="_blank">2026-09-04 19:17:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
