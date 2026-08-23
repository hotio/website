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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4728" onclick="CopyToClipboard('tag4728');return false;" class="tag-decoration">v2</div><div id="tag21084" onclick="CopyToClipboard('tag21084');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag7327" onclick="CopyToClipboard('tag7327');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag12340" onclick="CopyToClipboard('tag12340');return false;" class="tag-decoration">v2-v2</div><div id="tag17119" onclick="CopyToClipboard('tag17119');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18571" onclick="CopyToClipboard('tag18571');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag11727" onclick="CopyToClipboard('tag11727');return false;" class="tag-decoration">v2-develop</div><div id="tag19391" onclick="CopyToClipboard('tag19391');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag9399" onclick="CopyToClipboard('tag9399');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag10740" onclick="CopyToClipboard('tag10740');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29550" onclick="CopyToClipboard('tag29550');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1564" onclick="CopyToClipboard('tag1564');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag27101" onclick="CopyToClipboard('tag27101');return false;" class="tag-decoration">v3</div><div id="tag3515" onclick="CopyToClipboard('tag3515');return false;" class="tag-decoration">v3-edb7863</div><div id="tag31073" onclick="CopyToClipboard('tag31073');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag30266" onclick="CopyToClipboard('tag30266');return false;" class="tag-decoration">v3-v3</div><div id="tag20931" onclick="CopyToClipboard('tag20931');return false;" class="tag-decoration">v3-v3.3</div><div id="tag30078" onclick="CopyToClipboard('tag30078');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag23662" onclick="CopyToClipboard('tag23662');return false;" class="tag-decoration">v3-develop</div><div id="tag27010" onclick="CopyToClipboard('tag27010');return false;" class="tag-decoration">v3-develop-cddf0e7</div><div id="tag18376" onclick="CopyToClipboard('tag18376');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1252</div><div id="tag12746" onclick="CopyToClipboard('tag12746');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30889" onclick="CopyToClipboard('tag30889');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag9195" onclick="CopyToClipboard('tag9195');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/cddf0e75a3c6064d4abe1f6f1aa4e6d7cdc7ec2a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32617843052" target="_blank">2026-08-23 04:25:34</a></td></tr>
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
